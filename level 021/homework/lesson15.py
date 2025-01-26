# სხვადასხვა მონაცემთა ტიპების ცვლადები
integer_var = 10  # მთელი რიცხვი (int)
float_var = 3.14  # ათწილადი რიცხვი (float)
string_var = "გამარჯობა"  # სტრინგი (str)
boolean_var = True  # ლოგიკური ტიპი (bool)
list_var = [1, 2, 3, 4, 5]  # სია (list)
tuple_var = (1, 2, 3)  # კორტეჟი (tuple)
dict_var = {"სახელი": "გიორგი", "ასაკი": 25}  # ლექსიკონი (dict)
set_var = {1, 2, 3, 4, 5}  # მრავლი (set)

# თითოეული ცვლადის ტიპის შემოწმება და დაბეჭდვა
variables = [integer_var, float_var, string_var, boolean_var, list_var, tuple_var, dict_var, set_var]
variable_names = ["integer_var", "float_var", "string_var", "boolean_var", "list_var", "tuple_var", "dict_var", "set_var"]

for name, var in zip(variable_names, variables):
    print(f"{name} არის ტიპი: {type(var)}")
