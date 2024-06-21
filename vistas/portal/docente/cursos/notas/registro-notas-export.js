const $btnExportar = document.querySelector("#btnExportar");
const $btnIncidencia = document.querySelector("#btnIncidencia");
const $tabla = document.querySelector("#notasTable");

$btnExportar.addEventListener("click", function () {
    let tableExport = new TableExport($tabla, {
        exportButtons: false,
        filename: "Reporte_de_notas",
        sheetname: "Notas",
    });
    let datos = tableExport.getExportData();
    let preferenciasDocumento = datos.notasTable.xlsx;
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});