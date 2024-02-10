import requests
import cloudinary
import os
from dotenv import load_dotenv
load_dotenv()
cloudinary.config( 
  cloud_name = os.getenv("ClOUDINARY_CLOUD_NAME"), 
  api_key = os.getenv("ClOUDINARY_API_KEY"), 
  api_secret = os.getenv("ClOUDINARY_API_SECRET"),
  secure = True
)
import cloudinary.uploader
import cloudinary.api
from django.conf import settings

NEURELO_API_HOST = "https://ap-south-1.aws.neurelo.com"
NEURELO_API_KEY = "neurelo_9wKFBp874Z5xFw6ZCfvhXTAw5PJ2Ig9MV4IPeqFC7yNNfsgzT6zteASGCmGdNaUai46rYJSisg4RobndRP3j3/42TgUt+gHmF/5xy3avO1fSD/xlsByDa2Wgvk3BiX6JXpXACFi8IbULQ39xDX9UN7l0VzAygsqgbi6+vn0V5CcadEvLtIBVjREX/Qu8OAo3_7EObHban1U4OPsPCLI8YukG25fZ1VlUkwEbo1GKfiYM="

def make_request(method, endpoint, data=None, additional_headers=None):
    url = f"{NEURELO_API_HOST}/{endpoint}"

    headers = {
        'X-API-KEY': NEURELO_API_KEY,
        'Content-Type': 'application/json'
    }
    
    if additional_headers:
        headers.update(additional_headers)

    if method == 'GET':
        response = requests.get(url, headers=headers, data=data)
    elif method == 'POST':
        response = requests.post(url, json=data, headers=headers)
    elif method == 'PUT':
        response = requests.put(url, json=data, headers=headers)
    elif method == 'PATCH':
        response = requests.patch(url, json=data, headers=headers)
    elif method == 'DELETE':
        response = requests.delete(url, headers=headers)
    else:
        raise ValueError("Invalid HTTP method. Supported methods: GET, POST, PUT, DELETE")

    return response

def upload_image(file):
    try:
        response = cloudinary.uploader.upload(file, resource_type="auto", folder="test", use_filename=True, unique_filename=False)        
        image_url = response['secure_url']
        return image_url
    except Exception as e:
        print(f"Upload failed: {e}")
        return None