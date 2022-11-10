"use strict";
exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 9084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ supabase)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)("https://aliltdblkhwtxvwqhipo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsaWx0ZGJsa2h3dHh2d3FoaXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUzMjg1MzcsImV4cCI6MTk4MDkwNDUzN30.tyXQdp3IaQVFXP5odfmu2c-PZqY7fTr2LoDTg9IOR6Y");


/***/ }),

/***/ 5980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(9084);
;// CONCATENATED MODULE: ./components/search.jsx





function Search() {
    const { 0: toggleSearch , 1: setToggleSearch  } = (0,external_react_.useState)(false);
    const { 0: searchQuery , 1: setSearchQuery  } = (0,external_react_.useState)("");
    const { 0: searchedBooks , 1: setSearchedBooks  } = (0,external_react_.useState)([]);
    const { 0: filteredBooks , 1: setFilteredBooks  } = (0,external_react_.useState)([]);
    const searchBarOpener = (0,external_react_.useRef)();
    const getBooksBySearch = async (e)=>{
        let { data , error  } = await api/* supabase.from */.O.from("books_duplicate").select("*,authors(name),categories(name)");
        if (error) {
            console.log(error);
        } else {
            setSearchedBooks(data);
        }
    };
    (0,external_react_.useEffect)(()=>{
        getBooksBySearch();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const closeSearchBar = (e)=>{
            if (e.path[0] !== searchBarOpener.current) {
                setToggleSearch(false);
                setSearchQuery("");
            }
        };
        document.body.addEventListener("click", closeSearchBar);
        return ()=>{
            document.body.removeEventListener("click", closeSearchBar);
        };
    }, []);
    //  const handleKeyPress = (event) => {
    //   if (event.key === "Control" && event.key==="k") {
    //     setToggleSearch(true);
    //   }
    //    console.log(`Key pressed: ${event.key}`);
    //  }
    // useEffect(() => {
    //   window.addEventListener("keydown", handleKeyPress);
    // }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                ref: searchBarOpener,
                onClick: ()=>{
                    setToggleSearch(true);
                },
                className: `${toggleSearch ? "hidden" : "mt-[15px] w-64 inline-flex items-center  border border-transparent bg-zinc-600 px-3 py-2 rounded-md text-lg font-sm leading-4 text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        className: "w-5 h-5 mr-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        })
                    }),
                    "Search"
                ]
            }),
            toggleSearch ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `relative z-10 `,
                role: "dialog",
                "aria-modal": "true",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity  
            backdrop-blur-sm
          `
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative z-10",
                        role: "dialog",
                        "aria-modal": "true",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    onClick: (e)=>e.stopPropagation(),
                                    className: "bg-zinc-900 mx-auto max-w-xl transform overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative flex ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
                                                        clipRule: "evenodd"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-100 placeholder-gray-400 focus:ring-1 sm:text-sm",
                                                    placeholder: "Search...",
                                                    role: "combobox",
                                                    "aria-expanded": "false",
                                                    "aria-controls": "options",
                                                    onChange: (e)=>setSearchQuery(e.target.value)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "bg-zinc-900 max-h-96 overflow-y-auto ",
                                            children: searchQuery ? searchedBooks.filter((val)=>{
                                                if (searchQuery === "") {
                                                    return val;
                                                } else if (val.title.toLowerCase().includes(searchQuery.toLowerCase()) || val.authors.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                                                    return val;
                                                }
                                            }).map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: {
                                                        pathname: "/Details",
                                                        query: {
                                                            id: item.id,
                                                            category_name: item.categories.name,
                                                            category_id: item.category_id
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "cursor-pointer group flex hover:bg-zinc-800 select-none rounded-xl p-3",
                                                        id: "option-1",
                                                        role: "option",
                                                        tabIndex: "-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "flex h-24 w-20 flex-none items-center justify-center rounded-lg bg-zinc-900",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    className: "object-contain mx-auto px-2 rounded-md py-1",
                                                                    src: item.image,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "ml-4 flex-auto",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-sm font-medium text-gray-100",
                                                                        children: item.title
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-sm text-gray-100",
                                                                        children: item.authors.name
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, key)) : ""
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }) : ""
        ]
    });
}

;// CONCATENATED MODULE: ./pages/Home.jsx




function Home() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-full w-full bg-zinc-700 shadow-sm lg:static lg:overflow-y-visible ",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-16 bg-zinc-700 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " flex flex-row justify-between ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "text-white text-xl ml-[10px] mt-[15px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-gray-300",
                                        children: "Bangla"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-teal-500 ml-[5px]",
                                        children: "ebook"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Search, {})
                    ]
                })
            })
        })
    });
}


/***/ })

};
;