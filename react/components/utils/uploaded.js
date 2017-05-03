import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import Gallery from 'react-grid-gallery';
import CheckButton from './checkbutton';

class Uploaded extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            images: this.props.images,
            selectAllChecked: false
        };

        this.onSelectImage = this.onSelectImage.bind(this);
        this.getSelectedImages = this.getSelectedImages.bind(this);
        this.onClickSelectAll = this.onClickSelectAll.bind(this);
    }

    allImagesSelected (images){
        var f = images.filter(
            function (img) {
                return img.isSelected == true;
            }
        );
        return f.length == images.length;
    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });

        if(this.allImagesSelected(images)){
            this.setState({
                selectAllChecked: true
            });
        }
        else {
            this.setState({
                selectAllChecked: false
            });
        }
    }

    getSelectedImages () {
        var selected = [];
        for(var i = 0; i < this.state.images.length; i++)
            if(this.state.images[i].isSelected == true)
                selected.push(i);
        return selected;
    }

    onClickSelectAll () {
        var selectAllChecked = !this.state.selectAllChecked;
        this.setState({
            selectAllChecked: selectAllChecked
        });

        var images = this.state.images.slice();
        if(selectAllChecked){
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = true;
        }
        else {
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = false;

        }
        this.setState({
            images: images
        });
    }

    render () {
        return (
            <div>
              <CheckButton
		            index={0}
		            isSelected={this.state.selectAllChecked}
		            onClick={this.onClickSelectAll}
		            parentHover={true}
		            color={"rgba(0,0,0,0.54)"}
		            selectedColor={"#4285f4"}
		            hoverColor={"rgba(0,0,0,0.54)"}
							/>
              <div className="galleryselectall">
            		select all
            	</div>
              <div className="galleryselectimages">
									Selected images: {this.getSelectedImages().toString()}
							</div>
              <div className="gallerybox">
                <Gallery images={this.state.images}  onSelectImage={this.onSelectImage}/>
              </div>
            </div>
        )
    }
}

Uploaded.propTypes = {
    images: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            src: React.PropTypes.string.isRequired,
            thumbnail: React.PropTypes.string.isRequired,
            srcset: React.PropTypes.array,
            caption: React.PropTypes.string,
            thumbnailWidth: React.PropTypes.number.isRequired,
            thumbnailHeight: React.PropTypes.number.isRequired,
            isSelected: React.PropTypes.bool
        })
    ).isRequired
};

Uploaded.defaultProps = {
    images: [

    ]
}
export default Uploaded;
