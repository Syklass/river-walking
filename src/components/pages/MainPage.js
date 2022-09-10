import React from "react";
import Layout from "../layouts/Layout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function MainPage() {
    const Content = (  
        <div>
            <div className="flex flex-col justify-center items-center">
                <AccountCircleIcon className="!w-[200px] !h-[200px]"/>
                <div className="mt-4 text-center">
                    <h3 className="font-semibold text-xl">Обо мне<br/><br/></h3>
                    <p className="font-medium text-lg">Здравствуйте! Я Слава, Frontend разработчик из Москвы.
                    <br/>В последние годы я проходил обучение без возможности активно работать,<br/> однако это позволило мне
                    активно развиваться в этом направлении.
                    <br/><br/>В данный момент я закончил обучение и активно ищу работу<br/> с возможностью карьерного роста и развития в сфере.
                    <br/><br/>Из приятных дополнений это отсутствие вредных привычек, хорошие коммуникативные навыки,<br/> ответственность, целеустремленность и умение работать в команде. 
                    <br/>В случае необходимости готов быстро обучаться новому и развиваться для достижении больших успехов.
                    <br/><br/>Готов к удалённой работе, а также подумать над смежными направлениями :3</p>
                </div>
                <div className="mt-8">
                    <h3 className="font-semibold text-xl">Навыки</h3>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );

    return <Layout content={Content} />;
}

export default MainPage;