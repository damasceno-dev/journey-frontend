import {format} from "date-fns";
import {ptBR} from "date-fns/locale";

export function displayedDateFunction(fromDate: Date, toDate: Date) {
    if (format(fromDate, "LLL") ==format(toDate,  "LLL")){
        return format(fromDate, "d").concat(' até ').concat(format(toDate,  "d' de" +
            " 'LLL", {locale: ptBR}))
    } else {
        return format(fromDate, "d' de 'LLL", {locale: ptBR}).concat(' até ').concat(format(toDate,  "d'" +
            " de 'LLL", {locale: ptBR}))
    }
}