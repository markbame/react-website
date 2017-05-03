import React from 'react'
import DropzoneComponent  from 'react-dropzone-component'

class DropZoneUpload extends React.Component {
	fileadded(file) {
		console.log('added', file)
	}
	success(data, status, xhr) {
		console.log('success', status)
	}
	maxfiles() {
		console.log('maxfiles!')
	}
  render() {
		var componentConfig = {
				iconFiletypes: ['.jpg', '.png', '.gif'],
				showFiletypeIcon: true,
				postUrl: process.env.REACT_API + '/upload'
		};
		var djsConfig = {
			 autoProcessQueue: true,
			 maxfiles:3,
			 acceptedFiles: ".jpg,.png,.gif",
			 dictDefaultMessage:"Drop files here to upload"
		 }
		var eventHandlers = {
					addedfile: (file) => this.fileadded(file),
					success: this.success,
					maxfilesexceeded: this.maxfiles
				}

    return (
				<DropzoneComponent config={componentConfig}
					eventHandlers={eventHandlers}
					djsConfig={djsConfig} />
    )
  }
}
export default DropZoneUpload;
