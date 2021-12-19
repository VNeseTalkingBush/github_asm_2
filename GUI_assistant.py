import tkinter
from tkinter.constants import *
from PIL import ImageTk, Image

tk = tkinter.Tk()
tk.title('Jeff')
tk.geometry('320x520')

frame = tkinter.Frame(tk, relief=RIDGE, borderwidth=2)
frame.pack(fill=BOTH, expand=1)

button = tkinter.Button(text="SPEAK")
button.pack(side='left')

# img = ImageTk.PhotoImage(Image.open('robot.jpg'))



tk.mainloop()

