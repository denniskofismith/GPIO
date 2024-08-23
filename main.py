from gpiozero import LED    
from time import sleep

count = int(input('Number of Times to Blink:  '))


led1 = LED(27)

led2 = LED(18)


while count > 0:
    led1.on()
    sleep(1)
    led1.off()
    sleep(1)



















# from pprint import pprint

# import requests



# apikey = 'bf2a9fd0321fa9a5e53108e96bda0651'

# try:
#             location = input('Enter your Current Location: ').strip()
            
#             if not location:
#                 raise ValueError("Location cannot be empty. Please enter a valid location.")
            
#             elif not location.isalpha():
#                 raise ValueError("Location should only contain alphabetic characters. Please enter a valid location.")
            
# except ValueError as ve:
#             print(ve)
        



# r = requests.get(f'https://api.openweathermap.org/data/2.5/weather?q={location}&APPID={apikey}')
  


# response = r.json()


# if response['cod'] == "404" :
    
#     print("Invalid Location")
    
# else:
    
#     for key,value in response.items(): 
        
#         print(f"{key}:  {value}")