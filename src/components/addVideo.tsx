import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../state/store";
import { uploadThumbnail, uploadVideo } from "../state/file/fileActions";
import { addVideo } from "../state/videoo/videoActions";

function AddVideo() {
  const channelId=useSelector((state:RootState)=>state.channel.channel?.id)
  const categories=useSelector((state:RootState)=>state.categories.categories)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const handleSizeClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };
  const {register,handleSubmit,formState: { errors }} = useForm();
  const dispatch = useDispatch<appDispatch>();
  const toast = useToast()
  async function onSubmit(data:object) {

    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(200), 2000)
    })
    toast.promise(promise, {
      success: { title: 'Upload Success', description: 'Your video has been successfully uploaded.' },
      loading: { title: 'Uploading Video', description: 'Please wait while your video is being uploaded.' },
    });

    const formthumbnail = new FormData();
    formthumbnail.append('file', data.thumbnail[0]);
    const urlThumbnail = await dispatch(uploadThumbnail(formthumbnail));
    const formvideo = new FormData();
    formvideo.append('file', data.link[0]);
    const urlvideo = await dispatch(uploadVideo(formvideo));

    data.thumbnail=urlThumbnail.payload.url;
    data.link=urlvideo.payload.url;
    console.log(data);
    
    dispatch(addVideo(data)).then(res=>{
      console.log(res)
    });
  }

  return (
    <>
      <button className="bg-red-600 uppercase text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        onClick={() => handleSizeClick("full")} key={"full"} >
        Upload video
      </button>
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload your video to share with others</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="5">
                <FormControl className="flex flex-col items-center justify-center">
                  <FormLabel>Thumbnail</FormLabel>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="thumbnail-file"
                      className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-10"
                    >
                      <div className="flex flex-col items-center justify-center pt-4 pb-5">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                      </div>
                      <input id="thumbnail-file" type="file" className="hidden" {...register("thumbnail", { required: true })} />
                    </label>
                  </div>
                  {errors.thumbnail && <p className="text-red-500">Thumbnail is required</p>}
                </FormControl>
                <FormControl className="flex flex-col items-center justify-center">
                  <FormLabel>Video</FormLabel>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="video-file"
                      className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-10"
                    >
                      <div className="flex flex-col items-center justify-center pt-4 pb-5">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                      </div>
                      <input id="video-file" type="file" className="hidden" {...register("link", { required: true })} />
                    </label>
                  </div>
                  {errors.link && <p className="text-red-500">Video is required</p>}
                </FormControl>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input id="title" className="rounded-md border-gray-300" {...register("title", { required: true })} />
                  {errors.title && <p className="text-red-500">Title is required</p>}
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea id="description" className="rounded-md border-gray-300" {...register("description", { required: true })} />
                  {errors.description && <p className="text-red-500">Description is required</p>}
                </FormControl>
                <FormControl>
                  <FormLabel>Catrgory</FormLabel>
                  <Select placeholder="Select option" {...register("categoryId", { required: true })}>
                    {categories.map(cat => (
                      <option value={cat.id}>{cat.name}</option>
                    ))}
                  </Select>
                  {errors.catrgoryId && <p className="text-red-500">Catrgory is required</p>}
                </FormControl>
                <FormControl>
                  <Input id="channelId" value={channelId} {...register("channelId")} className="hidden rounded-md border-gray-300" />
                </FormControl>
              </Stack>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                <Button className="ml-3 bg-red-600 text-white" type="submit">
                  Upload
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddVideo;
