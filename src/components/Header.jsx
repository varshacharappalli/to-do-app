

export function Header(props) {
    const{todos}=props;
    const todoslength=todos.length;
    const isPluraltasks=todoslength!=1;
    const taskortasks=isPluraltasks?'tasks':'task';
    return <header>
        <h1 className="text-gradient">You have {todoslength} {taskortasks} remaining</h1>
        </header>;
}
