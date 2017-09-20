import React from 'react';
import Collapsible from 'react-collapsible';
import '../styles/index.scss';

export default class App extends React.Component {
  render() {
    return (
			<div className="collapse-wrapper">
				<Collapsible trigger={<div><span>Hello there!</span><i className="fa fa-angle-up"></i></div>} open={true}>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsum, fuga, in, obcaecati magni ullam nobis voluptas fugiat tenetur voluptatum quas tempora maxime rerum neque deserunt suscipit provident cumque et mollitia ex aspernatur porro minus sapiente voluptatibus eos at perferendis repellat odit aliquid harum molestias ratione pariatur adipisci. Aliquid, iure.</p>
				</Collapsible>
			</div>
    )
  }
}
