let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:   #20b9d8;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #20b9d8;">Estudio Administración y me encanta aprender cosas nuevas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
