from turtle import*


#we want to paint a house

#step one draw a square
speed(30)
color("purple")
width(7)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120) #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#drawing windows
color("purple")
left(30)
forward(70)
left(90)
forward(60)
left(90)
forward(50)
left(90)
forward(60)
left(90)
forward(180)
left(90)
forward(200)
left(90)
forward(180)
left(90)
forward(60)
left(90)
forward(50)
left(90)
forward(60)
left(90)
forward(25)
left(90)
forward(60)
right(90)
forward(25)
right(90)
forward(30)
right(90)
forward(50)
left(90)
forward(30)
left(90)
forward(70)
left(90)
forward(200)
left(90)
forward(45)
left(90)
forward(60)
left(90)
forward(25)
left(90)
forward(30)
left(90)
forward(50)


exitonclick()