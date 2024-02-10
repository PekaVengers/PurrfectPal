import {useState} from 'react';

export const AadhaarVerify = () => {
    const [aadhaarNo,setAadhaarNo] = useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const url = 'https://verifyaadhaarnumber.p.rapidapi.com/Uidverifywebsvcv1/VerifyAadhaarNumber';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '5de30d81f7msh4232aed7eaca995p1d6fd6jsnba44fb5c3f4f',
                'X-RapidAPI-Host': 'verifyaadhaarnumber.p.rapidapi.com'
            },
            body: new URLSearchParams({
                txn_id: '17c6fa41-778f-49c1-a80a-cfaf7fae2fb8',
                consent: 'Y',
                uidnumber: aadhaarNo,
                clientid: '222',
                method: 'uidvalidatev2'
            })
        };

        try {
            const response = fetch(url, options);
            response.then((res)=>res.json().then(data => console.log(data)));
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
      <input type="text" value={aadhaarNo} onChange={(e) => setAadhaarNo(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}