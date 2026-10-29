module.exports = [
(()=>{"use strict";return[
"[project]/src/components/Aviso.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Aviso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aviso$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Aviso.module.css [app-ssr] (css module)");
;
;
function Aviso({ tipo = "info", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aviso$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aviso} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aviso$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][tipo]}`,
        role: tipo === "erro" ? "alert" : "status",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Aviso.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/BuscaCaronas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuscaCaronas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Panel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Panel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormularioBusca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormularioBusca.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListaCaronas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ListaCaronas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caronas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/caronas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$busca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/busca.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function BuscaCaronas() {
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function buscar(criterios) {
        setResultado((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$busca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtrarCaronas"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caronas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caronas"], criterios));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Panel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "busca",
                titulo: "Buscar carona",
                ajuda: "Informe seu destino e encontre opções de trajeto.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormularioBusca$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    aoBuscar: buscar
                }, void 0, false, {
                    fileName: "[project]/src/components/BuscaCaronas.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BuscaCaronas.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            resultado !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Panel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "resultados",
                titulo: "Caronas encontradas",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListaCaronas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    caronas: resultado
                }, void 0, false, {
                    fileName: "[project]/src/components/BuscaCaronas.js",
                    lineNumber: 25,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BuscaCaronas.js",
                lineNumber: 24,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuscaCaronas.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CampoFormulario.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CampoFormulario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CampoFormulario.module.css [app-ssr] (css module)");
;
;
function CampoFormulario({ id, rotulo, valor, aoMudar, erro, ...resto }) {
    const idErro = `${id}-erro`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                children: rotulo
            }, void 0, false, {
                fileName: "[project]/src/components/CampoFormulario.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                name: id,
                value: valor,
                onChange: aoMudar,
                className: erro ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].invalido : undefined,
                "aria-invalid": erro ? "true" : "false",
                "aria-describedby": erro ? idErro : undefined,
                ...resto
            }, void 0, false, {
                fileName: "[project]/src/components/CampoFormulario.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            erro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: idErro,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].erro,
                children: erro
            }, void 0, false, {
                fileName: "[project]/src/components/CampoFormulario.js",
                lineNumber: 21,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CampoFormulario.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CardCarona.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardCarona
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CardCarona.module.css [app-ssr] (css module)");
;
;
function CardCarona({ carona }) {
    const { motorista, origem, destino, horario, vagas } = carona;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rota,
                        children: [
                            origem,
                            " → ",
                            destino
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CardCarona.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].horario,
                        children: horario
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardCarona.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardCarona.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detalhes,
                children: [
                    "Motorista: ",
                    motorista,
                    " · ",
                    vagas,
                    " ",
                    vagas === 1 ? "vaga" : "vagas"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardCarona.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CardCarona.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FormularioBusca.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormularioBusca
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ /* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CampoFormulario.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$historico$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/historico.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CAMPOS_VAZIOS = {
    destino: "",
    horario: "",
    partida: ""
};
function FormularioBusca({ aoBuscar }) {
    const [dados, setDados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(CAMPOS_VAZIOS);
    const [erroDestino, setErroDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    function atualizarCampo(evento) {
        const { name, value } = evento.target;
        setDados((anterior)=>({
                ...anterior,
                [name]: value
            }));
        if (name === "destino") setErroDestino("");
    }
    function enviar(evento) {
        evento.preventDefault();
        if (!dados.destino.trim()) {
            setErroDestino("Informe o destino para buscar uma carona.");
            return;
        }
        const criterios = {
            destino: dados.destino.trim(),
            horario: dados.horario,
            partida: dados.partida.trim()
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$historico$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adicionarBusca"])(criterios);
        aoBuscar(criterios);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: enviar,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "destino",
                rotulo: "Destino:",
                type: "text",
                placeholder: "Para onde você vai?",
                valor: dados.destino,
                aoMudar: atualizarCampo,
                erro: erroDestino
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioBusca.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "horario",
                rotulo: "Horário:",
                type: "time",
                valor: dados.horario,
                aoMudar: atualizarCampo
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioBusca.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "partida",
                rotulo: "Ponto de partida:",
                type: "text",
                placeholder: "De onde você sai?",
                valor: dados.partida,
                aoMudar: atualizarCampo
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioBusca.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button-submit",
                type: "submit",
                children: "Buscar carona"
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioBusca.js",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormularioBusca.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FormularioCadastro.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormularioCadastro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ /* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CampoFormulario.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aviso$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Aviso.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CAMPOS_VAZIOS = {
    nome: "",
    faculdade: "",
    localizacao: "",
    email: ""
};
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validar(dados) {
    const erros = {};
    if (!dados.nome.trim()) erros.nome = "Informe seu nome.";
    if (!dados.faculdade.trim()) erros.faculdade = "Informe sua faculdade.";
    if (!dados.localizacao.trim()) erros.localizacao = "Informe seu bairro ou cidade.";
    if (!dados.email.trim()) erros.email = "Informe seu e-mail.";
    else if (!REGEX_EMAIL.test(dados.email.trim())) erros.email = "Digite um e-mail válido.";
    return erros;
}
function FormularioCadastro() {
    const [dados, setDados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(CAMPOS_VAZIOS);
    const [erros, setErros] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [nomeCadastrado, setNomeCadastrado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    function atualizarCampo(evento) {
        const { name, value } = evento.target;
        setDados((anterior)=>({
                ...anterior,
                [name]: value
            }));
        setErros((anterior)=>({
                ...anterior,
                [name]: undefined
            }));
        setNomeCadastrado("");
    }
    function enviar(evento) {
        evento.preventDefault();
        const novosErros = validar(dados);
        setErros(novosErros);
        if (Object.keys(novosErros).length > 0) {
            setNomeCadastrado("");
            return;
        }
        setNomeCadastrado(dados.nome.trim());
        setDados(CAMPOS_VAZIOS);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: enviar,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "nome",
                rotulo: "Nome:",
                type: "text",
                placeholder: "Seu nome",
                valor: dados.nome,
                aoMudar: atualizarCampo,
                erro: erros.nome
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioCadastro.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "faculdade",
                rotulo: "Faculdade:",
                type: "text",
                placeholder: "Nome da faculdade",
                valor: dados.faculdade,
                aoMudar: atualizarCampo,
                erro: erros.faculdade
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioCadastro.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "localizacao",
                rotulo: "Localização:",
                type: "text",
                placeholder: "Bairro ou cidade",
                valor: dados.localizacao,
                aoMudar: atualizarCampo,
                erro: erros.localizacao
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioCadastro.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CampoFormulario$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "email",
                rotulo: "E-mail:",
                type: "email",
                placeholder: "nome@exemplo.com",
                valor: dados.email,
                aoMudar: atualizarCampo,
                erro: erros.email
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioCadastro.js",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button-submit",
                type: "submit",
                children: "Cadastrar"
            }, void 0, false, {
                fileName: "[project]/src/components/FormularioCadastro.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            nomeCadastrado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aviso$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                tipo: "sucesso",
                children: [
                    "Cadastro de ",
                    nomeCadastrado,
                    " recebido! Neste protótipo, os dados ainda não são salvos em um servidor."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FormularioCadastro.js",
                lineNumber: 58,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormularioCadastro.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ListaCaronas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListaCaronas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardCarona.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aviso$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Aviso.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListaCaronas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ListaCaronas.module.css [app-ssr] (css module)");
;
;
;
;
function ListaCaronas({ caronas }) {
    if (caronas.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aviso$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: "Nenhuma carona encontrada para essa busca. Tente outro destino, ponto de partida ou horário."
        }, void 0, false, {
            fileName: "[project]/src/components/ListaCaronas.js",
            lineNumber: 8,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "texto-ajuda",
                children: [
                    caronas.length,
                    " ",
                    caronas.length === 1 ? "opção encontrada" : "opções encontradas",
                    " (dados fictícios de demonstração)."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ListaCaronas.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListaCaronas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lista,
                children: caronas.map((carona)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardCarona$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        carona: carona
                    }, carona.id, false, {
                        fileName: "[project]/src/components/ListaCaronas.js",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ListaCaronas.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ListaCaronas.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Panel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ __turbopack_context__.s([
    "default",
    ()=>Panel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Panel({ id, titulo, ajuda, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: titulo
            }, void 0, false, {
                fileName: "[project]/src/components/Panel.js",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            ajuda ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "texto-ajuda",
                children: ajuda
            }, void 0, false, {
                fileName: "[project]/src/components/Panel.js",
                lineNumber: 6,
                columnNumber: 16
            }, this) : null,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Panel.js",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/caronas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ __turbopack_context__.s([
    "caronas",
    ()=>caronas
]);
const caronas = [
    {
        id: 1,
        motorista: "Marina S.",
        origem: "Santana",
        destino: "Mackenzie - Campus Higienópolis",
        horario: "07:30",
        vagas: 3
    },
    {
        id: 2,
        motorista: "Rafael T.",
        origem: "Perdizes",
        destino: "Mackenzie - Campus Higienópolis",
        horario: "07:15",
        vagas: 2
    },
    {
        id: 3,
        motorista: "Beatriz L.",
        origem: "Perdizes",
        destino: "Mackenzie - Campus Alphaville",
        horario: "08:00",
        vagas: 1
    },
    {
        id: 4,
        motorista: "Lucas M.",
        origem: "Jundiaí",
        destino: "Mackenzie - Campus Higienópolis",
        horario: "07:50",
        vagas: 4
    },
    {
        id: 5,
        motorista: "Camila R.",
        origem: "Pinheiros",
        destino: "Mackenzie - Campus Alphaville",
        horario: "08:20",
        vagas: 2
    },
    {
        id: 6,
        motorista: "Diego F.",
        origem: "Santana",
        destino: "Mackenzie - Campus Alphaville",
        horario: "06:50",
        vagas: 3
    }
];
}),
"[project]/src/lib/busca.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ __turbopack_context__.s([
    "filtrarCaronas",
    ()=>filtrarCaronas,
    "horarioParaMinutos",
    ()=>horarioParaMinutos,
    "normalizar",
    ()=>normalizar
]);
function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function horarioParaMinutos(horario) {
    const [horas, minutos] = horario.split(":").map(Number);
    return horas * 60 + minutos;
}
const TOLERANCIA_MINUTOS = 60;
function filtrarCaronas(caronas, { destino, partida, horario }) {
    return caronas.filter((carona)=>{
        if (!normalizar(carona.destino).includes(normalizar(destino))) return false;
        if (partida && !normalizar(carona.origem).includes(normalizar(partida))) return false;
        if (horario) {
            const diferenca = Math.abs(horarioParaMinutos(carona.horario) - horarioParaMinutos(horario));
            if (diferenca > TOLERANCIA_MINUTOS) return false;
        }
        return true;
    });
}
}),
"[project]/src/lib/historico.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adicionarBusca",
    ()=>adicionarBusca,
    "lerHistorico",
    ()=>lerHistorico,
    "limparHistorico",
    ()=>limparHistorico
]);
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */ const CHAVE = "caronau:historico";
const LIMITE = 10;
function salvar(lista) {
    try {
        window.localStorage.setItem(CHAVE, JSON.stringify(lista));
    } catch  {}
}
function lerHistorico() {
    try {
        const bruto = window.localStorage.getItem(CHAVE);
        const lista = bruto ? JSON.parse(bruto) : [];
        return Array.isArray(lista) ? lista : [];
    } catch  {
        return [];
    }
}
function adicionarBusca(busca) {
    const atualizado = [
        {
            ...busca,
            id: Date.now()
        },
        ...lerHistorico()
    ].slice(0, LIMITE);
    salvar(atualizado);
    return atualizado;
}
function limparHistorico() {
    salvar([]);
    return [];
}
}),
]})(),
"[project]/src/components/Aviso.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aviso": "Aviso-module__PCvTXq__aviso",
  "erro": "Aviso-module__PCvTXq__erro",
  "info": "Aviso-module__PCvTXq__info",
  "sucesso": "Aviso-module__PCvTXq__sucesso",
});
}),
"[project]/src/components/CampoFormulario.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "erro": "CampoFormulario-module__Gs_F6W__erro",
  "invalido": "CampoFormulario-module__Gs_F6W__invalido",
});
}),
"[project]/src/components/CardCarona.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "CardCarona-module__6DlAGa__card",
  "detalhes": "CardCarona-module__6DlAGa__detalhes",
  "horario": "CardCarona-module__6DlAGa__horario",
  "rota": "CardCarona-module__6DlAGa__rota",
  "topo": "CardCarona-module__6DlAGa__topo",
});
}),
"[project]/src/components/ListaCaronas.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "lista": "ListaCaronas-module__Au7hla__lista",
});
}),
];

//# sourceMappingURL=src_158bpggno3mkb._.js.map