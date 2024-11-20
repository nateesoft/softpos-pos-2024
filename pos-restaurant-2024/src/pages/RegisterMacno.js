import { useSearchParams } from 'react-router-dom';

const RegisterMacNo = () => {
    const [searchParams] = useSearchParams();
    const macno = searchParams.get("macno");

    if (macno) {
        localStorage.setItem('macno', macno)
        window.location.href = "/"
    }
}

export default RegisterMacNo
