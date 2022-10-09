import React from 'react';

const TodoList = (props) => {
    return (
        <div>
              <section>
                <ul>
                    {props.children}
                </ul>
              </section>
        </div>
    );
}

export {TodoList};
