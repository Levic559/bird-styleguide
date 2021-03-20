function BtnPagesUI (circleTwo="#9A9999", circleThree="#9A9999", lastPage="../covid-19_options/covid-19_options.html", nextPage="2.html")
{                                                             
    return`
        <div style="
            display: flex;
            flex-direction: row;
            max-width: 228px;
            min-width: 228px;
            justify-content: space-between;
            align-items: center;
        ">
            <div style="
                font-size: 25px;
                font-weight: bold;
                color: #545454;
                transition: text-shadow 0.3s;
            "
            onmouseover='BtnPagesUI.HandleMouseOver1(this)'
            onmouseout='BtnPagesUI.HandleMouseOut1(this)'
            onclick='window.location.href="${lastPage}"'
            > <<< </div>

            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #FF7A00;
                transition: border 0.3s;
            "
            onmouseover='BtnPagesUI.HandleMouseOver2(this)'
            onmouseout='BtnPagesUI.HandleMouseOut2(this)'
            onclick='window.location.href="../General_info-1/1.html"'
            ></div>
            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: ${circleTwo};
                transition: border 0.3s;
            "
            onmouseover='BtnPagesUI.HandleMouseOver2(this)'
            onmouseout='BtnPagesUI.HandleMouseOut2(this)'
            onclick='window.location.href="../General_info-3/1.html"'
            ></div>
            <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: ${circleThree};
                transition: border 0.3s;
            "
            onmouseover='BtnPagesUI.HandleMouseOver2(this)'
            onmouseout='BtnPagesUI.HandleMouseOut2(this)'
            onclick='window.location.href="../General_info-5/1.html"'
            ></div>

            <div style ="
                font-size: 25px;
                font-weight: bold;
                color: #545454;
                transition: text-shadow 0.3s;
            "
            onmouseover='BtnPagesUI.HandleMouseOver1(this)'
            onmouseout='BtnPagesUI.HandleMouseOut1(this)'
            onclick='window.location.href="${nextPage}"'
            > >>> </div>
        </div>
    `
}

BtnPagesUI.HandleMouseOver1 = (el) => {
    el.style.textShadow = "0px 0px 3px black"
}

BtnPagesUI.HandleMouseOut1 = (el) => {
    el.style.textShadow = "0px 0px 0px #545454"
}

BtnPagesUI.HandleMouseOver2 = (el) => {
    el.style.border = " 2px solid #545454"
}
BtnPagesUI.HandleMouseOut2 = (el) => {
    el.style.border = " 0px solid #545454"
}



//export const BtnPages = BtnPagesUI()