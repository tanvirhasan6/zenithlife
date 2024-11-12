import React, { createContext, useContext, useState } from "react";

export const LangContext = createContext(null);

const LanguageContext = ({children}) => {

    const [lang,setLang] = useState('বাংলা');

    return (
        <LangContext.Provider value={{lang, setLang}}>
            {children}
        </LangContext.Provider>
    );
};

export default LanguageContext;