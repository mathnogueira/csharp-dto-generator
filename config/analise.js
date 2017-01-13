let DTO = require('../src/main')

DTO
	.source('UserModel')
	.fields(['Id', 'Nome as Identidade', 'Documento as Cpf'])
	.target('BasicUserDTO');