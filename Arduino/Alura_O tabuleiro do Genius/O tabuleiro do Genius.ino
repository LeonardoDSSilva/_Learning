#define LED_VERDE 2
#define LED_VERMELHO 3
#define LED_AMARELO 4
#define LED_BRANCO 5
#define UM_SEGUNDO 1000
#define MEIO_SEGUNDO 500
int quant = 1;

void setup() {
  // put your setup code here, to run once:
	Serial.begin(9600);
	iniciarPortas();
}

void iniciarPortas(){
	pinMode(LED_VERDE, OUTPUT);
	pinMode(LED_VERMELHO, OUTPUT);
	pinMode(LED_AMARELO, OUTPUT);
	pinMode(LED_BRANCO, OUTPUT);
}


void loop() {
  // put your main code here, to run repeatedly:

	for(int i = 0; i < quant ; i++){
		int led = random(2, 6);
		piscarLed(led);
	}
	Serial.println(quant);
	piscarTodosLeds();
	quant++;

}

void piscarLed(int portaLed){
	//Serial.println(portaLed);
	digitalWrite(portaLed, HIGH);
	delay(UM_SEGUNDO);
	digitalWrite(portaLed, LOW);
	delay(MEIO_SEGUNDO);
}

void piscarTodosLeds(){
	digitalWrite(LED_VERDE, HIGH);
	digitalWrite(LED_VERMELHO, HIGH);
	digitalWrite(LED_AMARELO, HIGH);
	digitalWrite(LED_BRANCO, HIGH);
	delay(UM_SEGUNDO);
	digitalWrite(LED_VERDE, LOW);
	digitalWrite(LED_VERMELHO, LOW);
	digitalWrite(LED_AMARELO, LOW);
	digitalWrite(LED_BRANCO, LOW);
	delay(MEIO_SEGUNDO);
}