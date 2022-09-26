import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { updateUser } from './requests'

// Import the generated type
import { User } from '@prisma/client'

// Use the generated type to describe the component props
interface UserFormProps {
  user: Partial<User>
}

const UserForm = ({ user }: UserFormProps) => {
  // 1. Assume we have already fetched the current state of the form data
  // 2. Instantiate a form state controller, using default values
  // 2a. Pass the "User" type to the form state controller, for added type safety
  const { handleSubmit, register, formState } = useForm<User>({
    defaultValues: user,
  })

  // 3. Create a method to Mutate the remote data with the form data
  const mutation = useMutation(updateUser)

  // 4. Create a submit handler with the mutation method
  const onSubmit = async (data: User) => {
    await mutation.mutate(data)
  }

  return (
    <form
      // 5. Pass the form controller and submit handler to the form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 p-7"
    >
      <label>Username</label>
      <input {...register('username')} />

      <button className="pt-3 text-left">Update User</button>
    </form>
  )
}

export { UserForm }
