import { useForm } from "react-hook-form"
import RenderFields from "../../components/form/renderFields"
import { FormSchemaType } from "../../contracts/formContracts"
import { queryGenerator } from "../../helper/queryGenerator"
import callApi from "../../helper/callApi"
import { getQuiz } from "../../store/Slices/quizSlice"
import { useAppDispatch, useAppSelecor } from "../../store"
import { useNavigate } from "react-router-dom"


interface IOnePlay {

}

const OnePlay: React.FC<IOnePlay> = () => {

  const dispatch = useAppDispatch()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      playerName: "",
      amount: 10,
      category: { value: "21", label: "Sport" },
      difficulty: { value: "medium", label: "Medium" },
      type: { value: "multiple", label: "Multiple Choice" },
      encode: { value: '', label: 'Default Encoding' },
    }
  })
  const quizData = useAppSelecor((state) => state.quiz)
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    
    dispatch(getQuiz(data))
  }

  const formSchema: FormSchemaType = {
    playerName: {
      type: "text",
      label: "Your first name",
      control: control,
      placeholder: "First Name"
    },
    amount: {
      type: "number",
      label: "Number of Questions",
      control: control,
    },
    category: {
      type: "list",
      label: "Select Category",
      control: control,
      options: [
        { value: "", label: "Any Category" },
        { value: "9", label: "General Knowledge" },
        { value: "10", label: "Entertainment: Books" },
        { value: "11", label: "Entertainment: Film" },
        { value: "12", label: "Entertainment: Music" },
        { value: "13", label: "Entertainment: Musicals & Theatres" },
        { value: "14", label: "Entertainment: Television" },
        { value: "15", label: "Entertainment: Video Games" },
        { value: "16", label: "Entertainment: Board Games" },
        { value: "17", label: "Science & Nature" },
        { value: "18", label: "Computers" },
        { value: "19", label: "Mathematics" },
        { value: "20", label: "Mythology" },
        { value: "21", label: "Sports" },
        { value: "22", label: "Geography" },
        { value: "23", label: "History" },
        { value: "24", label: "Politics" },
        { value: "25", label: "Arts" },
        { value: "26", label: "Celebrities" },
        { value: "27", label: "Animals" },
        { value: "28", label: "Vehicles" },
        { value: "29", label: "Entertainment: Comics" },
        { value: "30", label: "Science: Gadgets" },
        { value: "31", label: "Entertainment: Japanese Anime & Mange" },
        { value: "32", label: "Entertainment: Cartoon & Animations" },
      ]
    },
    difficulty: {
      type: "list",
      label: "Select Difficulty",
      control: control,
      options: [
        { value: "", label: "Any Difficulty" },
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
      ]
    },
    type: {
      type: "list",
      label: "Select Type",
      control: control,
      options: [
        { label: "Any type", value: "" },
        { label: "Multiple Choice", value: "multiple" },
        { label: "True / False", value: "boolean" },
      ]
    },
    encode: {
      type: "list",
      label: "Select Encoding",
      control: control,
      options: [
        { value: "", label: "Default Encoding" },
        { value: "lagacy", label: "Lagacy URL Encoding" },
        { value: "url3986", label: "URL Encoding (RFC 3986)" },
        { value: "base64", label: "Base64 Encoding" }
      ]
    }
  }

  if (quizData.success) {
    navigate("/1-play/start")
  }

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <RenderFields formSchema={formSchema} submitTxt="Generate Game" loading={quizData.loading} />
        </form>
      </div>
    </div>
  )
}

export default OnePlay