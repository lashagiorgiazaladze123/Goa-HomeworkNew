# Ask the first person for their age
age1 = int(input("Enter the age of the first person: "))

# Ask the second person for their age
age2 = int(input("Enter the age of the second person: "))

# Compare the ages
if age1 > age2:
    print("The first person is older than the second person.")
elif age1 < age2:
    print("The second person is older than the first person.")
else:
    print("Both persons are of the same age.")
