# მომხმარებლისგან წონის და სიმაღლის შეყვანა
weight = float(input("შეიყვანეთ წონა კილოგრამებში: "))
height = float(input("შეიყვანეთ სიმაღლე მეტრებში: "))

# BMI-ს გამოთვლა
bmi = weight / (height ** 2)

# ჯანმრთელობის მდგომარეობის განსაზღვრა და შედეგის ჩვენება
if bmi < 18.5:
    health_status = "underweight"
elif 18.5 <= bmi < 24.9:
    health_status = "normal weight"
elif 25 <= bmi < 29.9:
    health_status = "overweight"
else:
    health_status = "obese"

print(f"თქვენი BMI არის: {bmi:.2f}")
print(f"თქვენი ჯანმრთელობის მდგომარეობა არის: {health_status}")
