document.getElementById("generateBtn").addEventListener("click", () => {
  const length = parseInt(document.getElementById("pwLength").value);
  const useUpper = document.getElementById("incUpper").checked;
  const useNumbers = document.getElementById("incDigits").checked;
  const useSymbols = document.getElementById("incSpecial").checked;

  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (useUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNumbers) charset += "0123456789";
  if (useSymbols) charset += "!@#$%&*?";

  let password = Array.from({length}, () => charset[Math.floor(Math.random() * charset.length)]).join('');
  
  document.getElementById("pwOutput").textContent = password;
});
