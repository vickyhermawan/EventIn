 {/* <Breadcrumb separator=">">
                    <Breadcrumb.Item><Link to='/dashboard/profile/'>Dashboard Profile Panitia</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard Edit Profile</Breadcrumb.Item>
                </Breadcrumb>

                <Row style={{minHeight: '100%',marginBottom: '2%',marginTop:'2%',}} className="background">
                    <Col lg={24} md={24} sm={24}> 
                        <div className="container-active-event">
                            <Row>
                                <div className="container-title-event">
                                    <span>Edit Profile</span>
                                </div>
                            </Row>
                     
                                <Form>
                                <div style={{minHeight:'100vh'}}>
                                <LoadingContainer loading={initialData.loading}>
                                    <div className="container-form">
                                        <Row>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Nama Panitia*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='nama_peserta'
                                                        placeholder="Masukan nama nama_peserta...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.nama_peserta}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Email*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='email'
                                                        placeholder="Masukan nama email...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.email}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Jenis Kelamin*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='organisasi'
                                                        placeholder="Masukan nama organisasi...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.organisasi}
                                                    />
                                                </div>
                                            </Col>
                                            
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">No Telefon*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='no_telepon'
                                                        placeholder="Masukan nomor telefon...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.no_telepon}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Foto profil*</span>
                                                </div>
                                                <div>

                                                    <Upload
                                                        name="picture"
                                                        listType="picture-card"
                                                        className="avatar-uploader"
                                                        showUploadList={true}
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        beforeUpload={beforeUpload}
                                                        onChange={handleChangeFoto}
                                                        previewFile={initialData.picture}
                                                    >
                                                        {initialData.picture ? <img src={initialData.picture} alt="avatar" style={{ width: '10%' }} /> : uploadButton}
                                                    </Upload>

                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="steps-action">
                                        <Button
                                            type="primary"
                                            // onClick={() => onNext()}
                                        >
                                            Done
                                        </Button>
                                    </div>
                                    </LoadingContainer>
                                    </div>
                                </Form>
                           
                        </div>
                    </Col>
                </Row>
            */}