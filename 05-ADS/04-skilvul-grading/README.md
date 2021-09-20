INPUT nilaiAwal

IF nilaiAwal >= 68  THEN
    IF nilaiAwal % 5 >= 3
        RETURN nilaiAwal + 2
    ELSE
        RETURN nilaiAwal
    ENDIF
ELSE
    RETURN nilaiAwal   
ENDIF