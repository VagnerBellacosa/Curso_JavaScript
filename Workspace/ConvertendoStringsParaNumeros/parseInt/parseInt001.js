// Exemplo: Usando parseInt
//
// Os seguintes exemplos sempre retornam 15:

parseInt(" 0xF", 16);
parseInt(" F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);

// Os seguintes exemplos sempre retornam NaN:

parseInt("Hello", 8); // Não é realmente um número
parseInt("546", 2); // Dígitos não são válidos para representações binárias

// Os seguintes exemplos sempre retornam -15:

parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10)
parseInt(" -17", 8);
parseInt(" -15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);

// O seguinte exemplo retorna 224:

parseInt("0e0", 16);