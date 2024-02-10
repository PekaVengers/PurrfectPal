const verifyAadhaar = async (aadhaarNo) => {
    const url = 'https://verifyaadhaarnumber.p.rapidapi.com/Uidverifywebsvcv1/VerifyAadhaarNumber';
    const options = {
        method: 'POST',
        headers: {
            'content-type': import.meta.env.VITE_CONTENT_TYPE,
            'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
        },
        body: new URLSearchParams({
            txn_id: import.meta.env.VITE_TXN_ID,
            consent: import.meta.env.VITE_CONSENT,
            uidnumber: aadhaarNo,
            clientid: import.meta.env.VITE_CLIENT_ID,
            method: import.meta.env.VITE_METHOD
        })
    };

    try {
        const response = fetch(url, options);
        response.then((res)=>res.json().then(data => console.log(data)));
    } catch (error) {
        console.error(error);
    }
}

export default verifyAadhaar;