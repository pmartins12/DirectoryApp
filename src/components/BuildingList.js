import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;
		const { textUpdate } = this.props;

		const buildingList = data.map(directory => { //filter
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
