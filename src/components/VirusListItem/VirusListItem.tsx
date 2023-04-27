import React from 'react'
import Virus from '../../models/Virus'
import { Logo } from '../../assets'


function VirusListItem({ virus }: {virus: Virus}) {
	return (
		<div key={virus.id} style={{ 
			display: 'flex', 
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 10
		}}>
			<div style={{ 
				display: 'flex', 
				flexDirection: 'row',
				gap: 18
			 }}>
				<img width={32} height={32} src={Logo[virus.type] ?? Logo.VIRUS}/>
				<h1 style={{ width: 200 }}>{virus.name}</h1>
			</div>
			
			<div>
				<h1>{virus.victims} victims</h1>
			</div>
		</div>
	)
}

export default VirusListItem