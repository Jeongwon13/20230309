const todoInputElem = document.querySelector(".todo-input"); // 1번하기 위해 선언
const todoListElem = document.querySelector(".todo-list"); // 4번하기 위해 선언


// *** 3번
// setTodos에 newTodos를 매개변수로 받아서 todos라는 값에 대입해줘
// 그러면 처음부터 그냥 getAllTodos에다가 newTodos 값을 넣으면 되는거 아닌가? 라고 생각이 드는데
// 사실 나도 왜 이러게 쪼개서 하는지는 잘 모르겠어.
// 내 생각에는 1번에서 getAllTodos 함수를 선언하고 여기서 따로 실행해야 해서 그런가봐.
const setTodos = (newTodos) => {
    todos = newTodos;
}

// 위에 날 것의 setTodos를 .concat 형식이 들어있는 getAllTodos로 반환하여 그 .concat 형식을 setTodos가 받게 하여 구워준다.
const getAllTodos = () => {
    return todos;
}


// *** 2번 
// 1번 조건에 의해서 appendTodos가 실행되었어
// 근데 이 appendTodos는 사용자가 입력한 text값을 매개변수로 받음. (1번 e.target.value로 받음)
// newId = id++; 순서 매기는거처럼 ++해줘서 id의 값이 중복되지 않게 해.
// concat({}) 함수는 문자열을 합쳐줘. 이걸 getAllTodos()라는 함수 안에 넣었어.
// setTodos(newTodos) 실행 / 이거는 newTodos라는 배열을 인수로 받아 새로운 할 일이 추가된 할 일 목록이야.
// paintTodos() 할 일 목록을 화면에 출력하기 위해 이게 있는거야.
const appendTodos = (Text) => {
    const newId = id++;
    const newTodos = getAllTodos().concat({id: newId, isCompleted: false, content: text});
    setTodos(newTodos);
    paintTodos();
}

// *** 4번
// 이제 paintTodos 함수가 실행되면서 concat 양식이 담긴 allTodos 변수명을 선언했어
// forEach문을 돌려 createElement. 동적으로 필요한 클래스들을 생성해!
// 그걸 todoItemElem(li)뒤에 다 붙이고 다 붙인걸 todoListElem(ul)뒤에 붙이면 돼!
const paintTodos = () => {
    todoListElem.innerHTML = "";
    const allTodos = getAllTodos();

    allTodos.forEach(todo => {
        const todoItemElem = document.createElement("li");
        todoItemElem.classList.add('todo-item');

        const checkboxElem = document.createElement("div");
        checkboxElem.classList.add("checkbox");

        const todoElem = document.createElement("div");
        todoElem.classList.add('todo');
        todoElem.innerText = todo.content;

        const delBtnElem = document.createElement("button");
        delBtnElem.classList.add("delBtn");
        delBtnElem.innerHTML = 'X';

        if(todo.isCompleted) {
            todoItemElem.classList.add('checked');
            checkboxElem.innerText = '✔';
        }


        todoItemElem.appendChild(checkboxElem); 
        todoItemElem.appendChild(todoElem);
        todoItemElem.appendChild(delBtnElem);

        todoListElem.appendChild(todoItemElem);

        // <ul>
        // <li>
        // <div></div>
        // <div></div>
        // <button></button>
        //</li>
        //</ul>
    });
}


// *** 1번
// type='input'인 todoInput에 값을 적어넣고 enter키를 누르면 appendTodos(input에 담긴 값)가 호출되고
// 기존 input란에 적었던 input 값은 초기화 됨.
const init = () => {
todoInputElem.addEventListener("keypress", e => {
    if(e.key == "Enter") {
        appendTodos(e.target.value);
        todoInputElem.value = "";
    }
})
}

init();