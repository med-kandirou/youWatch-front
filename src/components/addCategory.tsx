import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useToast } from "@chakra-ui/react"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { appDispatch } from "../state/store"
import { addCategory, getAllCategories } from "../state/categories/categorieActions"

function AddCategory() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const [category,setCategory] = useState();
    const dispatch = useDispatch<appDispatch>()
    const toast = useToast()
    function save() {
        dispatch(addCategory(category)).then(()=>{
            const toastConfig = {
                description: 'Category added with success',
                status: 'success',
                position: 'top-right',
                duration: 9000,
                isClosable: true,
              };
            toast(toastConfig);
            dispatch(getAllCategories())
        })
    }

    return (
      <>
        <Button onClick={onOpen}>Add category</Button>
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new category</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} onChange={(e)=>{setCategory(e.target.value)}} placeholder='name' />
              </FormControl> 
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=>{save()}} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddCategory;