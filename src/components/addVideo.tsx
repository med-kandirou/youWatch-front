import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"

function AddVideo() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    return (
      <>
        <button 
            className="bg-red-600 uppercase text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            onClick={() => handleSizeClick('full')}
            key={'full'}
        >Upload video</button>
  
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload your video to share with others</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat, cumque fuga sequi aut reprehenderit accusantium ex asperiores quaerat alias consequuntur tenetur! Animi ea itaque, quo molestiae tempore id distinctio.
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Button className="ml-5" onClick={onClose}>Upload</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default AddVideo;