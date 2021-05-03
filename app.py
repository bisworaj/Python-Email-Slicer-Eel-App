
import colorama
from colorama import init
from colorama import Fore,Back,Style
init()


print(Fore.GREEN,"------------------------ Python Email Slicer is Starting --------------------")
print(Fore.RED,"-------------------please wait some time ------------------------------------")


import eel
eel.init("web")

@eel.expose
def sliceEmail(email):
	[user_name,domain_name]=email.split('@')
	return [user_name,domain_name]

eel.start('index.html')