06 - Crie uma api que receba no body os parâmetros max_velocity_allowed e car_velocity.
Com esses dados você deve calcular e retornar se a pessoa recebeu uma multa de trânsito.
o retorno deve conter os seguintes dados:
{
   traffic_ticket: true/false,
   velocity__exceeded: 66,
   percentage_exceeded: "10%"
}
Para determinar se a pessoa recebeu uma multa ela deve ter ultrapassado em pelo menos 10% o limite da via (max_velocity_allowed)