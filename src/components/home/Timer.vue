<template>
    <v-container fluid class="ma-0 pa-0">
        <!-- For Desktop hidden-sm-and-down-->
        <v-row justify="center" align="center" class="ma-0 pa-0" >
            <v-col md="12" class="ma-0 pa-0">
                <p class="devfest-font my-0 py-0" style="font-size: 2.0vh;line-height: 1.22;font-weight:500"> 
                    <!-- Days -->
                    <span style="color:#0005DF;"><b>{{ days | twoDigits }}</b></span> 
                    {{ days > 1 ? 'Days' : 'Day' }}

                    <!-- Hours -->
                    <span style="color:#0005DF;"><b>{{ hours | twoDigits }}</b></span>
                    {{ hours > 1 ? 'Hours' : 'Hour' }}

                    <!-- Min -->
                    <span style="color:#0005DF;"><b>{{ minutes | twoDigits }}</b></span> 
                    {{ minutes > 1 ? 'Minutes' : 'Minute' }}

                    <!-- Sec -->
                    <span style="color:#0005DF;"><b>{{ seconds | twoDigits }}</b></span>
                    {{ seconds > 1 ? 'Seconds' : 'Second' }}
                </p>
            </v-col>


        </v-row>
    </v-container>
</template>

<script>
let interval = null;
export default {
    name: 'vuejsCountDown',
    props: {
        deadline: {
            type: String
        },
        end: {
            type: String
        },
        stop: {
            type: Boolean
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null,
            diff: 0
        }
    },
    created() {
        if (!this.deadline && !this.end) {
            throw new Error("Missing props 'deadline' or 'end'");
        }
        let endTime = this.deadline ? this.deadline : this.end;
        this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);
        if (!this.date) {
            throw new Error("Invalid props value, correct the 'deadline' or 'end'");
        }
        interval = setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000);
    },
    computed: {
        seconds() {
            return Math.trunc(this.diff) % 60
        },
        minutes() {
            return Math.trunc(this.diff / 60) % 60
        },
        hours() {
            return Math.trunc(this.diff / 60 / 60) % 24
        },
        days() {
            return Math.trunc(this.diff / 60 / 60 / 24)
        }
    },
    watch: {
        now(value) {
            this.diff = this.date - this.now;
            if(this.diff <= 0 || this.stop){
                this.diff = 0;
                // Remove interval
                clearInterval(interval);
            }
        }
    },
    filters: {
        twoDigits(value) {
            if ( value.toString().length <= 1 ) {
                return '0'+value.toString()
            }
            return value.toString()
        }
    },
    destroyed() {
        clearInterval(interval);
    }
}
</script>