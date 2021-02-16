import React,{Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Edit extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            id: this.props.article.id,
            image: this.props.article.image,
            titre: this.props.article.titre,
            article: this.props.article.article,
            date: this.props.article.date,
            auteur: this.props.article.auteur
        }
        this.state = this.initState 
    }
    handleChange = (e) =>{
        const {name,value} = e.target;
        const val = value;
        this.setState({[name]:val})
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];
        let newArt = {
            id: this.state.id,
            titre: this.state.titre,
            article : this.state.article,
            auteur : this.state.auteur,
            date: this.state.date,
            image: img
        }
        this.props.handleSubmit(newArt)
        toast("Article modifié avec succes!")
    }
    componentDidUpdate= ()=>{
        const id = this.props.article.id;
        if(id !== this.state.id){
            this.setState(this.props.article);
        }
    }
    render() { 
        const {titre,article,auteur,date,} = this.state
            return ( 
                <>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img src={`images/${this.state.image}`} alt="..."/>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="col-md-12">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="file" className="form-control" id="image"  name="image" onChange={this.handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Titre</label>
                                            <input type="text" className="form-control"  aria-describedby="emailHelp" name="titre" value={titre} onChange={this.handleChange}/>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Texte</label>
                                            <textarea type="text" className="form-control"  value={article} name="article" onChange={this.handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Auteur</label>
                                            <input type="text" className="form-control"  value={auteur} name="auteur" onChange={this.handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Date</label>
                                            <input type="text" className="form-control"  value={date} name="date" onChange={this.handleChange}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary offset-1 col-10">Submit</button>
                                    </form>
                                </div>
                            
                        </div>
                    </div>
                    </div>
                    </>
            )
    }
}
 



export default Edit;
    
   
       

 