'use client'

import { useCoverImage } from '@/hooks/use-cover-image'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'
import { useState } from 'react'
import { useEdgeStore } from '@/lib/edgestore'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useParams } from 'next/navigation'
import { Id } from '@/convex/_generated/dataModel'
import { SingleImageDropzone } from '../single-image-dropzone'

type CoverImageModalProps = {}

function CoverImageModal({}: CoverImageModalProps) {
  const [file, setFile] = useState<File>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const params = useParams()
  const coverImage = useCoverImage()
  const { edgestore } = useEdgeStore()
  const update = useMutation(api.documents.update)

  const onClose = () => {
    setFile(undefined)
    setIsSubmitting(false)
    coverImage.onClose()
  }

  const onChange = async (file?: File) => {
    console.log('uploading file', file)

    if (file) {
      setIsSubmitting(true)
      setFile(file)

      const res = await edgestore.publicFiles.upload({
        file,
      })

      await update({
        id: params.documentId as Id<'documents'>,
        coverImage: res.url,
      })

      onClose()
    }
  }

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className='text-center text-lg font-semibold'>Cover Image</h2>
        </DialogHeader>

        <div>TODO: Upload image</div>

        <SingleImageDropzone
          className='w-full outline-none'
          disabled={isSubmitting}
          value={file}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  )
}

export default CoverImageModal