function changeTimezone(date, ianatz)
{
  var invdate = new Date(date.toLocaleString('en-US', {timeZone: ianatz}));
  var diff = date.getTime() - invdate.getTime();
  return new Date(date.getTime() - diff);
}

function time()
{
  today = new Date();
  reset = new Date();
  today = changeTimezone(today, "America/Argentina/Buenos_Aires");

  if (today.getHours() >= 12)
  {
    reset.setHours(23);
    reset.setMinutes(59);
    reset.setSeconds(59);
    thour = reset.getHours() - today.getHours();
    tmin = reset.getMinutes() - today.getMinutes();
    tsec = reset.getSeconds() - today.getSeconds();
  }
  else if (today.getHours() >= 00)
  {
    reset.setHours(11);
    reset.setMinutes(59);
    reset.setSeconds(59);
    thour = reset.getHours() - today.getHours();
    tmin = reset.getMinutes() - today.getMinutes();
    tsec = reset.getSeconds() - today.getSeconds();
  }
  else
  {
    reset.setHours(11);
    reset.setMinutes(59);
    reset.setSeconds(59);
    thour = reset.getHours() - today.getHours() + 24;
    tmin = reset.getMinutes() - today.getMinutes();
    tsec = reset.getSeconds() - today.getSeconds();
  }

  document.getElementById('reset').innerHTML = '<strong>Próximo reinicio del servidor:</strong> ' + thour + ' horas ' + tmin + ' minutos ' + tsec + ' segundos';
  window.setTimeout("time()", 1000);
}
