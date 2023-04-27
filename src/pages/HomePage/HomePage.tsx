import React, { useContext, useEffect, useState } from 'react'
import './Style.css'
import { Header } from '../../components'
import { ServiceContext } from '../../context/ServiceContext'
import Virus from '../../models/Virus';
import VirusListItem from '../../components/VirusListItem';

function HomePage({ }) {
	const { virusService } = useContext(ServiceContext);

	const [virus, setVirus] = useState<Virus[]>([]);
	const [search, setSearch] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		
		virusService.getAll().then(data => {
			setVirus(data);	
			setLoading(false)
		}).catch(err => {
			console.log(err);
			setLoading(false)
		});
	}, []);

	return (
		<section className='board'>
			<Header />

			<div className='container'>
				<div className='list'>
					<div className='surface row gap-5'>
						<input value={search} onChange={(e) => setSearch(e.target.value)} className='input-search' type='text' placeholder='search...' />
					</div>


					<div className='surface virus-list'>
						{virus
							.filter(v => v.name?.toLowerCase().match(`${search.toLowerCase()}`) != null)
							.map((viru, id) => (
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								color: '#FFF'
							}}>
								<VirusListItem virus={viru} />
								{id+1 <  virus.length && 
								<hr style={{
									borderBottomColor: 'var(--primary)',
									borderBottomStyle: 'solid',
									borderBottomWidth: 1,
								}}/>}
							</div>
						))}
					</div>
				</div>

				<div className='graph'>
				
				</div>
			</div>
		</section>
	)
}

export default HomePage
