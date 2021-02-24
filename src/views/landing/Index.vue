<template>
    <v-main class="main main-raised elevation-24">
        <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12" >
                <InfoContent
                  info-horizontal
                  icon="mdi-email"
                  icon-color="indigo"
                  subtitle="Generador de textos"
                >
                </InfoContent>
              </v-col>
                <!-- Info -->
                <v-col cols="12" sm="12" md="12">
                  <v-expansion-panels>
                    <v-expansion-panel @change="form.reset()">
                      <v-expansion-panel-header>
                        CASO NEGADO A FALTA DE LOA
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <validation-observer ref="loa" v-slot="{ handleSubmit }">
                          <form @submit.prevent="handleSubmit(onSubmit('deniedText'))">
                            <v-row>
                              <!-- Control -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="control"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.control"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Control"
                                    clearable
                                    counter
                                    :maxlength="10"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-pound"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- AWB -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="awb"
                                >
                                  <v-text-field
                                    name="awb"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.awb"
                                    :error-messages="errors"
                                    color="primary"
                                    label="AWB"
                                    clearable
                                    counter
                                    :maxlength="12"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-numeric"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Invoice -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="invoice"
                                >
                                  <v-text-field
                                    name="invoice"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.invoice"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Factura"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-receipt"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Account -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="cuenta"
                                >
                                  <v-text-field
                                    name="cuenta"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.account"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Cuenta"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-card-account-details"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Sent By -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="sent_by"
                                >
                                  <v-select
                                    :error-messages="errors"
                                    name="sent_by"
                                    :loading="finding"
                                    :readonly="finding"
                                    item-text="name"
                                    clearable
                                    item-value="id"
                                    autocomplete="off"
                                    required="required"
                                    v-model.number="form.sent_by"
                                    :items="senders"
                                    prepend-icon="mdi-send"
                                    label="Enviado por"
                                  ></v-select>
                                </validation-provider>
                              </v-col>

                              <v-col cols="12" md="6" sm="12">
                                <v-btn block color="primary" type="submit">Generar y Copiar</v-btn>
                              </v-col>

                              <v-col cols="12">
                                <v-divider></v-divider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-dialog>
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" block outlined color="primary" v-on="on" >Ver en Español</v-btn>
                                  </template>
                                  <v-card>
                                    <v-card-title>Versión en español</v-card-title>
                                    <v-card-text v-html="deniedTextEs" />
                                  </v-card>
                                </v-dialog>
                                <lottie :options="defaultOptionsMail"></lottie>
                              </v-col>
                              <!-- Submit -->
                              <v-col ref="deniedText" cols="12" md="6" sm="12" v-html="deniedText" />
                            </v-row>
                          </form>
                        </validation-observer>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel @change="form.reset()">
                      <v-expansion-panel-header>
                        CUENTA EN CASH
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <validation-observer ref="cash" v-slot="{ handleSubmit }">
                          <form @submit.prevent="handleSubmit(onSubmit('accountInCash'))">
                            <v-row>
                              <!-- Control -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="control"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.control"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Control"
                                    clearable
                                    counter
                                    :maxlength="10"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-pound"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- AWB -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="awb"
                                >
                                  <v-text-field
                                    name="awb"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.awb"
                                    :error-messages="errors"
                                    color="primary"
                                    label="AWB"
                                    clearable
                                    counter
                                    :maxlength="12"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-numeric"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Invoice -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="invoice"
                                >
                                  <v-text-field
                                    name="invoice"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.invoice"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Factura"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-receipt"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Account -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="cuenta"
                                >
                                  <v-text-field
                                    name="cuenta"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.account"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Cuenta"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-card-account-details"
                                  />
                                </validation-provider>
                              </v-col>

                              <v-col cols="12" md="12" sm="12">
                                <v-btn block color="primary" type="submit">Generar y Copiar</v-btn>
                              </v-col>

                              <v-col cols="12">
                                <v-divider></v-divider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-dialog>
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" block outlined color="primary" v-on="on" >Ver en Español</v-btn>
                                  </template>
                                  <v-card>
                                    <v-card-title>Versión en español</v-card-title>
                                    <v-card-text v-html="accountInCashEs" />
                                  </v-card>
                                </v-dialog>
                                <lottie :options="defaultOptionsMail" :height="300"></lottie>
                              </v-col>
                              <!-- Submit -->
                              <v-col ref="accountInCash" cols="12" md="6" sm="12" v-html="accountInCash" />
                            </v-row>
                          </form>
                        </validation-observer>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel @change="form.reset()">
                      <v-expansion-panel-header>
                        INFORMACIÓN FACTURADA CORRECTAMENTE
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <validation-observer ref="allOk" v-slot="{ handleSubmit }">
                          <form @submit.prevent="handleSubmit(onSubmit('billedSuccess'))">
                            <v-row>
                              <!-- Control -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="control"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.control"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Control"
                                    clearable
                                    counter
                                    :maxlength="10"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-pound"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- AWB -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="awb"
                                >
                                  <v-text-field
                                    name="awb"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.awb"
                                    :error-messages="errors"
                                    color="primary"
                                    label="AWB"
                                    clearable
                                    counter
                                    :maxlength="12"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-numeric"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Invoice -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="invoice"
                                >
                                  <v-text-field
                                    name="invoice"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.invoice"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Factura"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-receipt"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Account -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="cuenta"
                                >
                                  <v-text-field
                                    name="cuenta"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.account"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Cuenta"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-card-account-details"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Value -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="valor en reales"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.value"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Valor en Reales"
                                    clearable
                                    counter
                                    :maxlength="19"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-currency-usd"
                                  />
                                </validation-provider>
                              </v-col>

                              <v-col cols="12" md="6" sm="12">
                                <v-btn block color="primary" type="submit">Generar y Copiar</v-btn>
                              </v-col>

                              <v-col cols="12">
                                <v-divider></v-divider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-dialog>
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" block outlined color="primary" v-on="on" >Ver en Español</v-btn>
                                  </template>
                                  <v-card>
                                    <v-card-title>Versión en español</v-card-title>
                                    <v-card-text v-html="billedSuccessEs" />
                                  </v-card>
                                </v-dialog>
                                <lottie :options="defaultOptionsMail" :height="300"></lottie>
                              </v-col>
                              <!-- Submit -->
                              <v-col ref="billedSuccess" cols="12" md="6" sm="12" v-html="billedSuccess" />
                            </v-row>
                          </form>
                        </validation-observer>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel @change="form.reset()">
                      <v-expansion-panel-header>
                        PESO FACTURADO CORRECTAMENTE
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <validation-observer ref="allOkTwo" v-slot="{ handleSubmit }">
                          <form @submit.prevent="handleSubmit(onSubmit('weightSuccess'))">
                            <v-row>
                              <!-- Control -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="control"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.control"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Control"
                                    clearable
                                    counter
                                    :maxlength="10"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-pound"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- AWB -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="awb"
                                >
                                  <v-text-field
                                    name="awb"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.awb"
                                    :error-messages="errors"
                                    color="primary"
                                    label="AWB"
                                    clearable
                                    counter
                                    :maxlength="12"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-numeric"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Invoice -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="invoice"
                                >
                                  <v-text-field
                                    name="invoice"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.invoice"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Factura"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-receipt"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Account -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="cuenta"
                                >
                                  <v-text-field
                                    name="cuenta"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.account"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Cuenta"
                                    clearable
                                    counter
                                    :maxlength="9"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-card-account-details"
                                  />
                                </validation-provider>
                              </v-col>
                              <!-- Weight -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="peso"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.weight"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Peso"
                                    clearable
                                    counter
                                    :maxlength="19"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-weight-kilogram"
                                  >
                                  </v-text-field>
                                </validation-provider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-radio-group label="Medida de peso" row hide-details v-model="form.weight_type">
                                  <v-radio

                                    label="KG"
                                    value="quilos"
                                  ></v-radio>
                                  <v-radio
                                    label="LB"
                                    value="libras"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <!-- Width -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="ancho"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.width"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Ancho"
                                    clearable
                                    counter
                                    :maxlength="19"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-weight-kilogram"
                                  >
                                  </v-text-field>
                                </validation-provider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-radio-group label="Medida de longitud" row hide-details v-model="form.type_width">
                                  <v-radio

                                    label="Pulgadas"
                                    value="polegadas"
                                  ></v-radio>
                                  <v-radio
                                    label="Centímetros"
                                    value="centímetros"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <!-- height -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="alto"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.height"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Alto"
                                    clearable
                                    counter
                                    :maxlength="19"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-weight-kilogram"
                                  >
                                  </v-text-field>
                                </validation-provider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-radio-group label="Medida de longitud" row hide-details v-model="form.type_height">
                                  <v-radio

                                    label="Pulgadas"
                                    value="polegadas"
                                  ></v-radio>
                                  <v-radio
                                    label="Centímetros"
                                    value="centímetros"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <!-- Long -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="largo"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.long"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Largo"
                                    clearable
                                    counter
                                    :maxlength="19"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-weight-kilogram"
                                  >
                                  </v-text-field>
                                </validation-provider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-radio-group label="Medida de longitud" row hide-details v-model="form.type_long">
                                  <v-radio

                                    label="Pulgadas"
                                    value="polegadas"
                                  ></v-radio>
                                  <v-radio
                                    label="Centímetros"
                                    value="centímetros"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <!-- Dims -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="peso dimensional"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.dims"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Peso dimensional"
                                    clearable
                                    counter
                                    :maxlength="19"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-weight-kilogram"
                                  >
                                  </v-text-field>
                                </validation-provider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-radio-group label="Medida de peso" row hide-details v-model="form.type_dims">
                                  <v-radio

                                    label="KG"
                                    value="quilos"
                                  ></v-radio>
                                  <v-radio
                                    label="LB"
                                    value="libras"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <!-- Value -->
                              <v-col cols="12" md="6" sm="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  :rules="form.validations.input_number_required"
                                  name="valor en reales"
                                >
                                  <v-text-field
                                    name="control"
                                    persistent-hint
                                    :loading="finding"
                                    :readonly="finding"
                                    v-model.number="form.value"
                                    :error-messages="errors"
                                    color="primary"
                                    label="Valor en Reales"
                                    clearable
                                    counter
                                    :maxlength="19"
                                    autocomplete="off"
                                    required="required"
                                    prepend-icon="mdi-currency-usd"
                                  />
                                </validation-provider>
                              </v-col>

                              <v-col cols="12" md="12" sm="12">
                                <v-btn block color="primary" type="submit">Generar y Copiar</v-btn>
                              </v-col>

                              <v-col cols="12">
                                <v-divider></v-divider>
                              </v-col>
                              <v-col cols="12" md="6" sm="12">
                                <v-dialog>
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" block outlined color="primary" v-on="on" >Ver en Español</v-btn>
                                  </template>
                                  <v-card>
                                    <v-card-title>Versión en español</v-card-title>
                                    <v-card-text v-html="weightSuccessEs" />
                                  </v-card>
                                </v-dialog>
                                <lottie :options="defaultOptionsMail" :height="300"></lottie>
                              </v-col>
                              <!-- Submit -->
                              <v-col ref="weightSuccess" cols="12" md="6" sm="12" v-html="weightSuccess" />
                            </v-row>
                          </form>
                        </validation-observer>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
      <v-snackbar
        v-model="snackbar"
      >
        {{ snackbar_text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="primary"
            icon
            v-bind="attrs"
            @click="snackbar = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
</template>

<script>
import * as mail from "@/assets/email.json"
  import {Generator} from "@/models/custom/Generator";

  export default {
    name: "Index",
    components: {
      InfoContent: () => import("@/components/landing/InfoContent"),
      EmptyState: () => import("@/components/base/EmptyState"),
    },
    data: () => ({
      finding: false,
      snackbar: false,
      snackbar_type: '',
      snackbar_text: '',
      defaultOptionsMail: {
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: mail.default
      },
      form: new Generator({
        control: '',
        awb: '',
        invoice: '',
        account: '',
        value: null,
        weight: null,
        weight_type: 'quilos',
        width: null,
        type_width: 'polegadas',
        height: null,
        type_height: 'polegadas',
        long: null,
        type_long: 'polegadas',
        dims: null,
        type_dims: 'quilos',
        sent_by: null,
      }),
      senders: [
        { id: 1, name: 'ALPS' },
        { id: 2, name: 'EMAIL' },
      ],
      trans: {
        quilos: 'kilos',
        libras: 'libras',
        polegadas: 'pulgadas',
        centímetros: 'centímetros',
      },
    }),
    methods: {
      onSubmit(ref) {
        let container = this.$refs[ref]
        this.$copyText(container.textContent, container)
        .then(() => {
          this.setSnack('Texto copiado en el portapapeles', 'success')
        })
      },
      setSnack: function (message = 'Algo sucedió, por favor recarga la página.', type = 'error') {
        this.snackbar = true;
        this.snackbar_type = type ;
        this.snackbar_text = message;
      },
    },
    computed: {
      deniedText() {
        return `<p>Bom dia prezado cliente,</p>\n\n<p>A solicitação feita pelo controle Nº ${this.form.control} para re-faturar o AWB Nº ${this.form.awb} - fatura Nº ${this.form.invoice} para a conta Nº ${this.form.account} foi negada, porque a carta de autorização (LOA) não foi recebida.</p>\n\n<p>Lembre-se que a carta de autorização das cobranças (LOA) deve ser em papel timbrado e assinada pelo titular da conta que aceitará as cobranças.</p>\n\n<p>Por favor, reabra a solicitação através da nossa equipa de contato ao enviar a carta de autorização das cobranças para o email: brazilinvoincing@fedex.com.</p>\n\n<p>Use o seguinte modelo para preencher os dados:</p><p class="blockquote">Please consider this letter of authorization to debit the freight according to the protocol #_____________, in our FedEx account #_____________. the material supported by AWB #_____________.</p>\n\n${this.form.sent_by === 2 ? '<p>Não responda o email, se precisar de mais informações reabrir a solicitação através da nossa equipa de contato.</p>\n\n' : ''}<p>Em nome de seus colaboradores, a FedEx te deseja um bom dia, até logo.</p>`
      },
      accountInCash() {
        return `<p>Bom dia prezado cliente,<p>\n\n<p>A solicitação feita pelo controle Nº ${this.form.control} para re-faturar o AWB Nº ${this.form.awb} - fatura Nº ${this.form.invoice} para a conta Nº ${this.form.account} foi negada.</p>\n\n<p>A conta N° ${this.form.account} está desativada porque tem várias faturas associadas pendentes de pagamento.</p>\n\n<p>Não responda o email, se precisar de mais informações reabrir a solicitação através da nossa equipa de contato.</p>\n\n<p>Em nome de seus colaboradores, a FedEx te deseja um bom dia, até logo.</p>`
      },
      billedSuccess() {
        return `<p>Bom dia prezado cliente,</p>\n\n<p>A solicitação feita pelo controle N° ${this.form.control} para credenciar o AWB N° ${this.form.awb} - fatura Nº ${this.form.invoice} pelo valor de $R ${this.form.value} foi negada. De acordo com nossos sistemas, as informações faturadas na conta N° ${this.form.account} estão corretas e não há nenhum tipo de erro.</p>\n\n<p>Não responda o email, se precisar de mais informações reabrir a solicitação através da nossa equipa de contato.</p>\n\n<p>Em nome de seus colaboradores, a FedEx te deseja um bom dia, até logo.</p>`
      },
      weightSuccess() {
        return `<p>Bom dia prezado cliente,</p>\n\n<p>A solicitação feita pelo controle N° ${this.form.control} para credenciar o AWB N° ${this.form.awb} - fatura N° ${this.form.invoice} por erro no peso faturado foi negada. De acordo com nossos scanners, o valor faturado na conta N° ${this.form.account} está correto e não há nenhum tipo de erro.</p>\n\n<p>O AWB N° ${this.form.awb} foi faturado por um peso físico de ${this.form.weight} ${this.form.weight_type}  - com as dimensões comprimento ${this.form.long} ${this.form.type_long}, largura ${this.form.width} ${this.form.type_width} e altura ${this.form.height} ${this.form.type_height}; gerando desta forma um peso dimensional de ${this.form.dims} ${this.form.type_dims} peso pelo qual é cobrada a taxa de $R ${this.form.value}.</p>\n\n<p>Não responda o email, se precisar de mais informações reabrir a solicitação através da nossa equipa de contato.</p>\n\n<p>Em nome de seus colaboradores, a FedEx te deseja um bom dia, até logo.</p>`
      },
      deniedTextEs() {
        return `<p>Buen día apreciado cliente,</p>\n\n<p>La solicitud realizada por el control N° ${this.form.control} para refacturar la AWB Nº ${this.form.awb} - factura Nº ${this.form.invoice} a la cuenta Nº ${this.form.account} fue negada, porque la carta de autorización (LOA) no fue recibida.</p>\n\n<p>Recuerde que la carta de autorización de los cobros (LOA) debe estar en papel membreteado y firmada por el titular de la cuenta que aceptará el cobro.</p>\n\n<p>Por favor, reabra a solicitud a través de nuestro equipo de contácto al enviar la carta de autorización del cobro al email: brazilinvoincing@fedex.com.</p>\n\n<p>Use la siguiente plantilla para diligenciar los datos:</p><p class="blockquote">Please consider this letter of authorization to debit the freight according to the protocol #_____________, in our FedEx account #_____________. the material supported by AWB #_____________.</p>\n\n${this.form.sent_by === 2 ? '<p>No responda este email, si necesita mayor información reabra la solicitud a través de nuestro equipo de contácto.</p>\n\n' : ''}<p>En nombre de sus colaboradores, FedEx le desea un buen día, hasta luego.</p>`
      },
      accountInCashEs() {
        return `<p>Buen día apreciado cliente,<p>\n\n<p>La solicitud realizada por el control N° ${this.form.control} para refacturar la AWB Nº ${this.form.awb} - factura Nº ${this.form.invoice} a la cuenta Nº ${this.form.account} fue negada.</p>\n\n<p>La cuenta N° ${this.form.account} está deshabilitada porque tiene varias facturas asociadas pendientes por pago.</p>\n\n<p>No responda este email, si necesita mayor información reabra la solicitud a través de nuestro equipo de contácto.</p>\n\n<p>En nombre de sus colaboradores, FedEx le desea un buen día, hasta luego.</p>`
      },
      billedSuccessEs() {
        return `<p>Buen día apreciado cliente,</p>\n\n<p>La solicitud realizada por el control N° ${this.form.control} para acreditar la AWB N° ${this.form.awb} - factura Nº ${this.form.invoice} por un valor de $R ${this.form.value} fue negada. De acuerdo con nuestros sistemas, la información facturada en la cuenta N° ${this.form.account} es correcta y no presenta ningún tipo de error.</p>\n\n<p>No responda este email, si necesita mayor información reabra la solicitud a través de nuestro equipo de contácto.</p>\n\n<p>En nombre de sus colaboradores, FedEx le desea un buen día, hasta luego.</p>`
      },
      weightSuccessEs() {
        return `<p>Buen día apreciado cliente,</p>\n\n<p>La solicitud realizada por el control N° ${this.form.control} para acreditar la AWB N° ${this.form.awb} - factura N° ${this.form.invoice} por error en el peso facturado fue negada. De acuerdo con nuestros escáners, el valor facturado en la cuenta N° ${this.form.account} es correcto y no presenta ningún tipo de error.</p>\n\n<p>La AWB N° ${this.form.awb} fue facturada por un peso físico de ${this.form.weight} ${this.trans[this.form.weight_type]}  - con las dimensiones: largo ${this.form.long} ${this.trans[this.form.type_long]}, ancho ${this.form.width} ${this.trans[this.form.type_width]} y alto ${this.form.height} ${this.trans[this.form.type_height]}; generando de esta forma un peso dimensional de ${this.form.dims} ${this.trans[this.form.type_dims]} por el cual es cobrada una tarifa de $R ${this.form.value}.</p>\n\n<p>No responda este email, si necesita mayor información reabra la solicitud a través de nuestro equipo de contácto.</p>\n\n<p>En nombre de sus colaboradores, FedEx le desea un buen día, hasta luego.</p>`
      },
      cardWidth: function () {
        return this.$vuetify.breakpoint.smAndDown ? undefined : 800;
      },
    },
  }
</script>

