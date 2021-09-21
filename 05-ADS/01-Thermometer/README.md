```html
INPUT suhu
INPUT jenis

IF jenis IS "fahrenheit" THEN
  SET hasil = (suhu-32) * (5/9)
  DISPLAY hasil
ELSE IF jenis IS "kelvin" THEN
  SET hasil = (suhu-273.15)
  DISPLAY hasil
ELSE
  DISPLAY suhu
ENDIF
```
