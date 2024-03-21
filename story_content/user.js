function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MtsNzGARNv":
        Script1();
        break;
      case "6XojvOKotWw":
        Script2();
        break;
      case "5kTY7MDRk1i":
        Script3();
        break;
      case "6Gy4f14Lzc7":
        Script4();
        break;
      case "5utC2RfEagY":
        Script5();
        break;
      case "6fnuXxXNLDp":
        Script6();
        break;
      case "6p4fjqTEPmJ":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musikku.mp3";

audio.load();

audio.play();

audio.volume=0.1;
}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.1; 
}

function Script3()
{
  var audio = document.getElementById('bgSong');

audio.play();

audio.volume = 0.0;
}

function Script4()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.1; 
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.play();

audio.volume = 0.1; 
}

function Script6()
{
  var audio = document.getElementById('bgSong');

audio.play();

audio.volume = 0.0;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1; 
}

