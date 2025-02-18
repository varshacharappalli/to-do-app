export function Tabs(props){
    const{todos,selectedTab,setSelectedTab}=props;
    const isAll=todos.length;
    const isCompleted = todos.filter(todo => todo.complete == true).length;
    const isRemaining = todos.filter(todo => todo.complete == false).length;

    const tabs = [
        { name: "All", count: isAll },
        { name: "Open", count: isRemaining },
        { name: "Completed", count: isCompleted }
    ];
    return(
        <nav className="tab-container">
            {tabs.map((tab,tabIndex)=>{
                return(
                    <button onClick={()=>{
                        setSelectedTab(tab.name)
                    }} id={tabIndex} className={"tab-button "+(tab==selectedTab?' tab-selected':' ')}>
                        <h4>{tab.name}
                            <span>
                                ({tab.count})
                            </span>
                        </h4>
                    </button>
                )
            })
            }
            <hr/>
        </nav>
    )
}