import pyfiglet 
import  termcolor 
import colored
import random
def get_random_font_styel ():
    font_styel = pyfiglet.FigletFont.getFonts()
    return random.choice(font_styel)

def get_random_color ():
    color = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"]
    return random.choice(color)
def wish_mother_day():
    random_font_styel = get_random_font_styel()
    random_color = get_random_color()
    font = pyfiglet.Figlet(font = random_font_styel)
    print (termcolor.colored(font.renderText("Happy Mother's Day"), random_color))

wish_mother_day()