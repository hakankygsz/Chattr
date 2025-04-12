import { addDoc, collection, db } from "@/app/firebase";
import PageMeta from "@/components/common/PageMeta";
import Button from "@/components/ui/Button/Button";
import InputField from "@/components/ui/InputField/InputField";
import Modal from "@/components/ui/Modal/Modal";
import { capitalize } from "@/utils/stringUtil";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import * as Yup from "yup";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [formValues, setFormValues] = useState<any>(null);

    const formik = useFormik({
        initialValues: {
            title: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Başlık zorunludur.")
                .min(3, "Başlık en az 3 karakter olmalı."),
            email: Yup.string()
                .email("Geçerli bir e-posta adresi girin.")
                .required("E-posta zorunludur."),
            message: Yup.string()
                .required("Mesaj alanı boş bırakılamaz.")
                .min(10, "Mesaj en az 10 karakter olmalı.")
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await addDoc(collection(db, "messages"), {
                    title: values.title,
                    email: values.email,
                    message: values.message,
                    timestamp: new Date(),
                });
                setStatusMessage("Mesajınız başarıyla gönderildi!");
                setIsModalOpen(false);
                resetForm();
            } catch (error) {
                console.error("Hata oluştu: ", error);
                setStatusMessage("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
                setIsModalOpen(false);
            } finally {
                setLoading(false);
            }
        }
    });

    useEffect(() => {
        const title = searchParams.get("title");
        const email = searchParams.get("email");
        const message = searchParams.get("message");

        if (title || email || message) {
            formik.setValues({
                title: capitalize(title || ""),
                email: email || "",
                message: message || "",
            });
        }
    }, [searchParams]);

    const handleSubmitWithConfirmation = (e: any) => {
        e.preventDefault()
        if (formik.isValid && formik.dirty) {
            setFormValues(formik.values);
            setIsModalOpen(true);
        } else {
            formik.setStatus("Lütfen formu eksiksiz doldurun.");
        }
    };

    const handleModalConfirm = (e: any) => {
        e.preventDefault()
        formik.submitForm();
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    const getStatusColor = (status: string) => {
        if (status?.includes("başarıyla")) {
            return "text-green-600 dark:text-green-400";
        } else if (status?.includes("deneyin")) {
            return "text-red-600 dark:text-red-400";
        }
        return "";
    };

    return (
        <div className='w-full min-h-screen flex flex-col items-center bg-white dark:bg-[#080816]'>
            <PageMeta title='Hakan Kaygusuz - İletişim' description='Hakan Kaygusuz İletişim Sayfası' />
            <div className='flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto pt-8'>
                <h2 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-black dark:text-white mb-8'>
                    İletişim
                </h2>

                <p className='max-w-4xl text-lg sm:text-xl font-light leading-relaxed text-center px-8 text-neutral-800 dark:text-neutral-300'>
                    Aşağıdaki formu doldurarak benimle iletişime geçebilirsiniz.
                </p>

                {statusMessage && (
                    <div className={`mt-4 text-center ${getStatusColor(statusMessage)}`}>
                        {statusMessage}
                    </div>
                )}

                <form className="flex flex-col gap-4 mt-10 w-full max-w-sm md:max-w-2xl">
                    <div className='flex flex-col gap-8 w-full'>
                        <InputField
                            className="dark:bg-black/25 bg-white text-black dark:text-white"
                            name="email"
                            type="email"
                            label="E-Posta"
                            placeholder="E-Postanızı yazınız"
                            formik={formik}
                        />

                        <InputField
                            className="dark:bg-black/25 bg-white text-black dark:text-white"
                            name="title"
                            type="text"
                            label="Başlık"
                            placeholder="Başlığı giriniz"
                            formik={formik}
                        />

                        <InputField
                            className="dark:bg-black/25 bg-white text-black dark:text-white"
                            name="message"
                            type="text"
                            inputType="textarea"
                            label="Mesaj"
                            placeholder="Mesajınızı yazınız"
                            formik={formik}
                        />
                    </div>

                    <Button type="button" onClick={handleSubmitWithConfirmation} loading={loading} className="mt-12 !bg-white !text-black dark:!text-white dark:!bg-black/50 shadow-none" size="lg" icon={<IoIosSend />} iconPosition="right">
                        Gönder
                    </Button>
                </form>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleModalCancel}
                type="info"
                size="medium"
                closeOnOverlayClick={true}
                autoClose={32000}
                loading={loading}
            >
                <div className="flex flex-col justify-between pb-12 h-full w-full !select-text">
                    <p className="mt-4 text-xl text-center text-black dark:text-white">Mesajınızı göndermek istediğinizden emin misiniz?</p>
                    <div className="flex justify-between gap-4 mt-4 w-full">
                        <Button onClick={handleModalCancel} className="!bg-red-500 dark:!bg-red-700 dark:!text-white w-full">İptal</Button>
                        <Button onClick={handleModalConfirm} className="!bg-green-500 dark:!bg-green-700 dark:!text-white w-full">Onayla</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Contact;
