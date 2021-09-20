start -> arahkan untuk memulai string dari depan
end -> arahkan untuk memulai string dari belakang

FUNCTION cekpalindrom (string,start,end) :
    IF (length OF string < 1)
        RETURN True
    ELSE IF 
        string[mulai] == string[akhir]
        RETURN cekpalindrom(string,start+1,end-1)
    ELSE
        RETURN False
    ENDIF
END
