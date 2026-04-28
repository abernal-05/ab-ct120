//practice
x = {SinOsc.ar(700, mul:0.125)}.play;
x.free;

//ominous sounding?
(
z = {
	var freq, sig;
	freq = LFNoise0.kr(3).exprange(350,100);
	sig = SinOsc.ar(freq);
}.play;
)

