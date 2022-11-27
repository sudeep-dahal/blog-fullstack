import React from 'react'
import Edit from'../img/edit.png'
import Delete from'../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Sudeep</span>
            <p>Posted 5 minutes ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet cont. Soluta at quidem tempora, recusandae error tenetur labore temporibus. Quam, ipsam facere!</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, saepe! Quia iusto autem cum itaque vero necessitatibus nobis quis sed magnam ipsa placeat dolorem, recusandae porro nam fugiat debitis soluta laudantium possimus aspernatur repellendus et impedit odit. Consequuntur, natus. Tempore sed libero omnis autem, reprehenderit ratione voluptate iure mollitia delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad quaerat facilis repellat repellendus voluptas quo amet, <br/>
        
          
          
        quas excepturi quod quia dolorum commodi animi, eaque vitae nostrum! Ad nam excepturi illum sequi, eligendi dicta ratione autem ullam debitis, nostrum fugiat hic nesciunt, laboriosam officiis vero quaerat numquam! Consectetur mollitia ipsum rerum deserunt accusamus libero omnis, incidunt, repudiandae, non unde aut iusto esse autem provident qui exercitationem atque distinctio veniam voluptate. <br/>
          
        Quidem ab ipsa reiciendis eos. Enim mollitia inventore ducimus earum ipsum delectus ut perferendis accusantium dignissimos et, dolor dolorem sit laboriosam harum cumque quam optio similique sunt, provident temporibus sed illum. Provident ipsum fugit porro dolore laudantium, voluptatum illo atque asperiores? Recusandae deserunt voluptatum id, optio magnam commodi fuga placeat? Aliquid dolores voluptates animi ratione? Ullam amet quo possimus eius ducimus omnis expedita, dolore esse alias aliquid sit mollitia deserunt exercitationem ipsam doloremque? Maxime non fugit, sunt laborum illum soluta incidunt doloremque, temporibus consectetur voluptates odit alias ipsa fugiat blanditiis obcaecati minima dolorum officiis at. Odit, quos blanditiis sit saepe optio, nihil totam molestias quam obcaecati vitae fugit aspernatur cumque culpa earum repudiandae in architecto temporibus corporis, ipsum incidunt amet? Sequi eius id earum quasi autem deserunt, veritatis quas magnam?</p>

      </div>
      <Menu/>

    </div>
  )
}

export default Single