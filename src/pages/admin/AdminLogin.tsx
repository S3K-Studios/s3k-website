import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Input, Button, Card, CardBody, CardHeader } from "@heroui/react";

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            history.push("/admin");
        } catch (err: any) {
            setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="flex pb-0 pt-6 px-6 flex-col items-center">
                    <h1 className="text-2xl font-bold">Admin Girişi</h1>
                    <p className="text-default-500 text-sm mt-1">S3K Studios Yönetim Paneli</p>
                </CardHeader>
                <CardBody className="px-6 py-8">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <Input
                            isRequired
                            label="Email"
                            placeholder="admin@s3kstudios.com"
                            type="email"
                            value={email}
                            variant="bordered"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            isRequired
                            label="Şifre"
                            placeholder="••••••••"
                            type="password"
                            value={password}
                            variant="bordered"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-danger text-sm">{error}</p>}
                        <Button
                            className="mt-2"
                            color="primary"
                            isLoading={loading}
                            type="submit"
                        >
                            Giriş Yap
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default AdminLogin;
